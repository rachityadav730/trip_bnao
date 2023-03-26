import React from 'react'
import { Formik } from 'formik';


const index = (props) => {
  return (
    <div>

        <h1>formik form</h1>
        <Formik
       initialValues={{ name: 'jared' }}
       onSubmit={(values, actions) => {

        console.log("onsubmit",values,actions)
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {props => (

        
         <form onSubmit={props.handleSubmit}>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="name"
           />
           {console.log("props inside formik",props)}
           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
      
    </div>
  )
}

export default index
