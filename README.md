## React- Meme generator app

### Overview

The user can generate a meme, by specifying the content and by selecting an image from different meme images.

### Tree view

Displayed using ReacTree

![Tree](https://github.com/user-attachments/assets/9c2334cf-eea5-4498-9bc7-dff6d82e9e91)

### Components and its usage
- Header: To display the logo
- Meme: To get the list of meme images and to generate a random image from the list with the user specified content.

### Concepts used
- Hooks: 
  - useState to handle a state object. This is used to display the top text, bottom text, and the image for the meme.
  - useEffect to receive a list of meme images from imgflip site.
 
- Controlled component:
  - The <input> fields in the component are controlled because their values are tied to the component's state, to maintain single source of truth.
  - The value prop of the input fields is set to the corresponding state value, and the onChange event handler updates the state whenever the user types in the input fields.
 
### Live Demo
(https://scrimba-krishna-v-react-meme.netlify.app/)
