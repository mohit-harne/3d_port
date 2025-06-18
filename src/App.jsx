import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  VideoEditing,
  Design,
} from "./components";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./components/Carousel";
import { supabase } from './supabaseClient';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "./features/users/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  console.log('Users:', users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;

    dispatch(addUser({ name, age: parseInt(age) }));
    setName('');
    setAge('');
  };

  // Image Upload Handling
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imageFile) return alert('Please select a file.');

    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `users/${fileName}`;

    const { error } = await supabase.storage.from('users').upload(filePath, imageFile);
    if (error) {
      console.error('Upload error:', error.message);
      return;
    }

    const { data } = supabase.storage.from('users').getPublicUrl(filePath);
    setImageUrl(data.publicUrl);
    console.log('Uploaded image URL:', data.publicUrl);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div style={{ overflowX: "hidden" }} className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />

           
          </div>

          <div id="about" className="min-h-screen">
            <About />
          </div>

         

          <div id="experience" className="min-h-screen">
            <Experience />
          </div>
          <div id="carousel" className="min-h-screen">
            <Carousel />
          </div>
          <div id="design" className="min-h-screen">
            <Design />
          </div>

          {/* <div id="works" className="min-h-screen">
            <Works />
          </div> */}

          <div id="videoediting" className="min-h-screen">
            <VideoEditing />
          </div>

          <div id="contact" className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
