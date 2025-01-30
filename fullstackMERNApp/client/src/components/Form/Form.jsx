// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
// import { useDispatch, useSelector } from 'react-redux';

// import useStyles from './styles';
// import { createPost, updatePost } from '../../actions/posts';

// import PropTypes from 'prop-types';

// const Form = ({ currentId, setCurrentId }) => {
//     // state que crea y define los datos para el post
//     const emptyData = {
//         creator: '',
//         title: '',
//         message: '',
//         tags: '',
//         selectedFile: '',
//     };
//     const [postData, setPostData] = useState(emptyData);
//     // datos para el post cuando va a ser actualizado
//     const post = useSelector((state) =>
//         currentId ? state.posts.find((p) => p._id === currentId) : null
//     );
//     // effect para mostrar la informacion en el formulario al querer actualizar algo.
//     useEffect(() => {
//         if (post) setPostData(post);
//     }, [post]);
//     // clases para dar estilo
//     const classes = useStyles();
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault(); // previene eventos default como la actualizacion del browser

//         if (currentId) {
//             dispatch(updatePost(currentId, postData));
//         } else {
//             dispatch(createPost(postData));
//         }
//         clear();
//     };
//     // borrar informacion del formulario.
//     const clear = () => {
//         setCurrentId(null);
//         setPostData(emptyData);
//     };
//     return (
//         <Paper className={classes.paper}>
//             <form
//                 autoComplete="off"
//                 noValidate
//                 className={`${classes.root} ${classes.form}`}
//                 onSubmit={handleSubmit}
//             >
//                 <Typography variant="h6">{currentId? 'Editing':'Creating'} a Memory</Typography>
//                 <TextField
//                     name="creator"
//                     variant="outlined"
//                     label="Creator"
//                     fullWidth
//                     value={postData.creator}
//                     onChange={(e) =>
//                         setPostData({ ...postData, creator: e.target.value })
//                     }
//                 />
//                 <TextField
//                     name="title"
//                     variant="outlined"
//                     label="Title"
//                     fullWidth
//                     value={postData.title}
//                     onChange={(e) =>
//                         setPostData({ ...postData, title: e.target.value })
//                     }
//                 />
//                 <TextField
//                     name="message"
//                     variant="outlined"
//                     label="Message"
//                     fullWidth
//                     value={postData.message}
//                     onChange={(e) =>
//                         setPostData({ ...postData, message: e.target.value })
//                     }
//                 />
//                 <TextField
//                     name="tags"
//                     variant="outlined"
//                     label="Tags"
//                     fullWidth
//                     value={postData.tags}
//                     onChange={(e) =>
//                         setPostData({ ...postData, tags: e.target.value })
//                     }
//                 />
//                 <div className={classes.fileInput}>
//                     <FileBase
//                         type="file"
//                         multiple={false}
//                         onDone={({ base64 }) =>
//                             setPostData({ ...postData, selectedFile: base64 })
//                         }
//                     />
//                 </div>
//                 <Button
//                     className={classes.buttonSubmit}
//                     variant="contained"
//                     color="primary"
//                     size="large"
//                     type="submit"
//                     fullWidth
//                 >
//                     Submit
//                 </Button>
//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     size="small"
//                     onClick={clear}
//                     fullWidth
//                 >
//                     Clear
//                 </Button>
//             </form>
//         </Paper>
//     );
// };
// Form.propTypes = {
//     currentId: PropTypes.object,
//     setCurrentId: PropTypes.func,
// };

// export default Form;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core' ;
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles'; // Assuming you have a JSS or CSS-in-JS solution
import FileBase from 'react-file-base64'; // Ensure this supports React 18 or use a compatible library.

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );

    const classes = useStyles(); // Assuming you're using a makeStyles or similar approach
    const dispatch = useDispatch();

    // Populate form data when editing an existing post
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clearForm();
    };

    const clearForm = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                    }
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (comma-separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(',').map((tag) => tag.trim()),
                        })
                    }
                    sx={{ marginBottom: 2 }}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 1 }}
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clearForm}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

Form.propTypes = {
    currentId: PropTypes.string,
    setCurrentId: PropTypes.func.isRequired,
};

export default Form;
