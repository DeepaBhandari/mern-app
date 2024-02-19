import classes from './styles.module.css';
import { GlobalContext } from '../../context';
import {useContext} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function AddNewBlog(){
    const { formData, setFormData, setIsEdit, isEdit } =
    useContext(GlobalContext);
    const navigate = useNavigate();
    
    async function handleSaveBlogToDatabase(){
     const response = await axios.post('http://localhost:5000/api/blogs/add',{
        title: formData.title,
        description: formData.description
     })
     const result = await response.data;
     
     console.log(result);

     if(result){
        setFormData({
            title: '',
            description: ''
        })
        navigate('/')
     }
    }
    return(
        <div className={classes.wrapper}>
        <h1>Add A Blog</h1>
        <div>
            <input
            name='title'
            placeholder='Enter Blog Title'
            id='title'
            value= {formData.title}
            onChange={(e)=>setFormData({
                ...formData,
                title:e.target.value,
            })}
            />
             <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({
              ...formData,
              description: event.target.value,
            })
          }
        />
        <button onClick= {handleSaveBlogToDatabase}>
          {isEdit ? "Edit Blog" : "Add Blog"}
        </button>
        </div>
        </div>
    )
}