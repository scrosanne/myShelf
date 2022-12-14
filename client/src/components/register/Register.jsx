import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState("");
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setInput({
            ...input,
            [e.currentTarget.name]: text, //grab input element and add with propertyname to state object
        });
    };

    const handleSubmit = () => {
        fetch("/register", {
            method: "POST",
            body: JSON.stringify(input), //stringify object with form input
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success === true) {
                    location.reload();
                } else {
                    setError("pls try again");
                }
            });
    };

    return (
        <div className="register">
            <h1>register</h1>
            <p>{error}</p>

            <div className="form-block">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={(e) => handleInputChange(e)}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={(e) => handleInputChange(e)}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleInputChange(e)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleInputChange(e)}
                />

                <button onClick={() => handleSubmit()}>Register</button>
            </div>

            <p>
                already a member? &nbsp;
                <Link to="/login">log in</Link>
            </p>
        </div>
    );
}

// // export default class Register extends Component {
// //     constructor(props) {
// //         super(props);

// //         this.state = {
// //             //error: false,
// //             //message: "",
// //         };

// //         //bind methods
// //         this.handleInputChange = this.handleInputChange.bind(this);
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //     }

//     // m e t h o d s
//     handleInputChange(e) {
//         const text = e.currentTarget.value;
//         this.setState({
//             [e.currentTarget.name]: text, //grab input element and add with propertyname to state object
//         });
//     }

// handleSubmit() {
//     console.log(this.state);
//     //fetch POST request to the server's registration route
//     // //body coming in give it body of data
//     fetch("/register", {
//         method: "POST",
//         body: JSON.stringify(this.state), //stringify object with form input
//         headers: { "Content-Type": "application/json" },
//     })
// //         .then((res) => res.json())
// //         .then((response) => {
// //             if (response) {
// //                 //"success true"
// //                 location.reload();
// //             } else {
// //                 //"success false"
// //                 //console.log(response);
// //                 //this.setState({ message: response });
// //                 //update state to make error appear, also for catch
// //             }
// //         });
// // }

// // t e m p l a t e
// //     render() {
// //         return (
// //             <div className="register">
// //                 <h1>register</h1>
// //                 {/* <div>
// //                     <p>{this.state.message}</p>
// //                 </div> */}

// //                 <div className="form-block">
// //                     <input
// //                         type="text"
// //                         name="firstName"
// //                         placeholder="First Name"
// //                         onChange={this.handleInputChange}
// //                     />

// //                     <input
// //                         type="text"
// //                         name="lastName"
// //                         placeholder="Last Name"
// //                         onChange={this.handleInputChange}
// //                     />

// //                     <input
// //                         type="email"
// //                         name="email"
// //                         placeholder="Email"
// //                         onChange={this.handleInputChange}
// //                     />

// //                     <input
// //                         type="password"
// //                         name="password"
// //                         placeholder="Password"
// //                         onChange={this.handleInputChange}
// //                     />

// //                     <button onClick={this.handleSubmit}>Register</button>
// //                 </div>

// //                 <p>
// //                     already a member? &nbsp;
// //                     <Link to="/login">log in</Link>
// //                 </p>
// //             </div>
// //         );
// //     }
// // }
