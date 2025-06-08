import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, FileText, Bell, CheckCircle, Upload, Edit, Trash2, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { auth, db, storage } from '@/lib/firebase';
import { collection, query, getDocs, updateDoc, doc, addDoc, deleteDoc, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Editor from '@monaco-editor/react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    category: '',
    image: '',
    excerpt: '',
    tags: []
  });
  const [programs, setPrograms] = useState([]);
  const [showAddProgram, setShowAddProgram] = useState(false);
  const [newProgram, setNewProgram] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: '',
    level: 'beginner',
    aboutCourse: '',
    learningObjectives: '',
    videoContent: [{ title: '', url: '', description: '' }],
    syllabus: [{ week: '', topic: '', content: '' }],
    assignments: [{ title: '', description: '', dueDate: '' }],
    resources: [{ title: '', url: '', type: '' }],
    websiteLink: '',
    imageUrl: ''
  });
  const [editingProgram, setEditingProgram] = useState(null);
  const [showEditProgram, setShowEditProgram] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate('/');
        return;
      }

      const userDoc = await getDocs(query(
        collection(db, 'users'),
        where('email', '==', user.email)
      ));

      if (!userDoc.docs[0]?.data()?.role === 'faculty') {
        navigate('/');
      }
    };

    checkAdmin();
  }, [navigate]);

  const fetchUsers = async () => {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(usersData);
  };

  const fetchBlogs = async () => {
    const blogsRef = collection(db, 'blogs');
    const snapshot = await getDocs(blogsRef);
    const blogsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogsData);
  };

  const fetchPrograms = async () => {
    const programsRef = collection(db, 'programs');
    const snapshot = await getDocs(programsRef);
    const programsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPrograms(programsData);
  };

  const fetchNotifications = async () => {
    const notificationsRef = collection(db, 'contacts');
    const snapshot = await getDocs(notificationsRef);
    const notificationsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNotifications(notificationsData);
  };

  useEffect(() => {
    fetchUsers();
    fetchBlogs();
    fetchPrograms();
    fetchNotifications();
  }, []);

  const handleVerifyUser = async (userId, isVerified) => {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { verified: isVerified });
    fetchUsers();
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), {
        ...newBlog,
        author: auth.currentUser?.email,
        createdAt: new Date().toISOString()
      });
      toast.success('Blog post added successfully!');
      setShowAddBlog(false);
      setNewBlog({
        title: '',
        content: '',
        category: '',
        image: '',
        excerpt: '',
        tags: []
      });
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to add blog post');
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', blogId));
        toast.success('Blog post deleted successfully!');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog post');
      }
    }
  };

  const handleAddProgram = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'programs'), {
        ...newProgram,
        createdAt: new Date().toISOString(),
        createdBy: auth.currentUser?.email
      });
      
      toast.success('Program added successfully!');
      setShowAddProgram(false);
      setNewProgram({
        title: '',
        description: '',
        price: '',
        duration: '',
        category: '',
        level: 'beginner',
        aboutCourse: '',
        learningObjectives: '',
        videoContent: [{ title: '', url: '', description: '' }],
        syllabus: [{ week: '', topic: '', content: '' }],
        assignments: [{ title: '', description: '', dueDate: '' }],
        resources: [{ title: '', url: '', type: '' }],
        websiteLink: '',
        imageUrl: ''
      });
      fetchPrograms();
    } catch (error) {
      console.error('Error adding program:', error);
      toast.error('Failed to add program');
    }
  };

  const handleEditProgram = async (e) => {
    e.preventDefault();
    try {
      const programRef = doc(db, 'programs', editingProgram.id);
      await updateDoc(programRef, {
        ...editingProgram,
        updatedAt: new Date().toISOString(),
        updatedBy: auth.currentUser?.email
      });
      
      toast.success('Program updated successfully!');
      setShowEditProgram(false);
      setEditingProgram(null);
      fetchPrograms();
    } catch (error) {
      console.error('Error updating program:', error);
      toast.error('Failed to update program');
    }
  };

  const startEditProgram = (program) => {
    setEditingProgram(program);
    setShowEditProgram(true);
  };

  // Add image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProgram({ ...newProgram, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProgram = async (programId) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      try {
        await deleteDoc(doc(db, 'programs', programId));
        toast.success('Program deleted successfully!');
        fetchPrograms();
      } catch (error) {
        toast.error('Failed to delete program');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl text-yellow-600  font-bold">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <Button onClick={() => window.print()}>
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Users className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold">{users.length}</h3>
              <p className="text-gray-600">Total Users</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Users className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold">{programs.length}</h3>
              <p className="text-gray-600">Total Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <BookOpen className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold">{blogs.length}</h3>
              <p className="text-gray-600">Total Services</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Bell className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold">{notifications.length}</h3>
              <p className="text-gray-600">Notifications</p>
            </motion.div>
          </div>

          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            <Button
              variant={activeTab === 'users' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('users')}
            >
              <Users className="w-4 h-4 mr-2" />
              Users
            </Button>
            <Button
              variant={activeTab === 'blogs' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('blogs')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Services
            </Button>
            <Button
              variant={activeTab === 'notifications' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button
              variant={activeTab === 'programs' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('programs')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Projects
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">User Management</h2>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Users
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.fullName}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.verified
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.verified ? 'Verified' : 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Button
                              onClick={() => handleVerifyUser(user.id, !user.verified)}
                              variant="outline"
                              size="sm"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {user.verified ? 'Unverify' : 'Verify'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'blogs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Services Management</h2>
                  <Button onClick={() => setShowAddBlog(true)}>
                    <Upload className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </div>

                {showAddBlog && (
                  <div className="mb-6">
                    <form onSubmit={handleAddBlog} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Service Title"
                        className="w-full p-2 border rounded"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        required
                      />
                      <textarea
                        placeholder="Service Content"
                        className="w-full p-2 border rounded h-32"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        className="w-full p-2 border rounded"
                        value={newBlog.category}
                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                        required
                      />
                      <div className="flex justify-end space-x-4">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setShowAddBlog(false)}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">Add Service</Button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogs.map((blog) => (
                    <motion.div
                      key={blog.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow p-6 border"
                    >
                      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-semibold">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteBlog(blog.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'programs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Program Management</h2>
                  <Button onClick={() => setShowAddProgram(true)}>
                    <Upload className="w-4 h-4 mr-2" />
                    Add Program
                  </Button>
                </div>

                {(showAddProgram || showEditProgram) && (
                  <div className="mb-6">
                    <form onSubmit={showEditProgram ? handleEditProgram : handleAddProgram} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Program Title"
                        className="w-full p-2 border rounded"
                        value={showEditProgram ? editingProgram.title : newProgram.title}
                        onChange={(e) => showEditProgram 
                          ? setEditingProgram({ ...editingProgram, title: e.target.value })
                          : setNewProgram({ ...newProgram, title: e.target.value })}
                        required
                      />
                      <textarea
                        placeholder="Program Description"
                        className="w-full p-2 border rounded h-32"
                        value={showEditProgram ? editingProgram.description : newProgram.description}
                        onChange={(e) => showEditProgram
                          ? setEditingProgram({ ...editingProgram, description: e.target.value })
                          : setNewProgram({ ...newProgram, description: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        className="w-full p-2 border rounded"
                        value={showEditProgram ? editingProgram.category : newProgram.category}
                        onChange={(e) => showEditProgram
                          ? setEditingProgram({ ...editingProgram, category: e.target.value })
                          : setNewProgram({ ...newProgram, category: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Website Link"
                        className="w-full p-2 border rounded"
                        value={showEditProgram ? editingProgram.websiteLink : newProgram.websiteLink}
                        onChange={(e) => showEditProgram
                          ? setEditingProgram({ ...editingProgram, websiteLink: e.target.value })
                          : setNewProgram({ ...newProgram, websiteLink: e.target.value })}
                        required
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Program Image URL
                        </label>
                        <input
                          type="text"
                          placeholder="Enter image URL"
                          className="w-full p-2 border rounded"
                          value={showEditProgram ? editingProgram.imageUrl : newProgram.imageUrl}
                          onChange={(e) => showEditProgram
                            ? setEditingProgram({ ...editingProgram, imageUrl: e.target.value })
                            : setNewProgram({ ...newProgram, imageUrl: e.target.value })}
                        />
                        {(showEditProgram ? editingProgram.imageUrl : newProgram.imageUrl) && (
                          <div className="mt-2">
                            <img
                              src={showEditProgram ? editingProgram.imageUrl : newProgram.imageUrl}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-lg"
                              onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-end space-x-4">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            if (showEditProgram) {
                              setShowEditProgram(false);
                              setEditingProgram(null);
                            } else {
                              setShowAddProgram(false);
                            }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">
                          {showEditProgram ? 'Update Program' : 'Add Program'}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {programs.map((program) => (
                    <motion.div
                      key={program.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow p-4 border hover:shadow-lg transition-shadow"
                    >
                      {program.imageUrl && (
                        <img
                          src={program.imageUrl}
                          alt={program.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
                          }}
                        />
                      )}
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{program.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{program.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {program.category}
                          </span>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => startEditProgram(program)}
                              className="h-8 w-8 p-0"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteProgram(program.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <a 
                            href={program.websiteLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:underline truncate max-w-[150px]"
                          >
                            {program.websiteLink}
                          </a>
                          <span>{new Date(program.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Notifications</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-lg shadow p-6 border"
                      >
                        <h3 className="text-lg font-bold mb-2">{notification.name}</h3>
                        <p className="text-gray-600 mb-4">{notification.email}</p>
                        <p className="text-gray-600 mb-4">{notification.message}</p>
                        <span className="text-gray-500 text-sm">
                      
                        </span>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-600">No notifications available.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}