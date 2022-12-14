import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
        //fetch POST request to the server's registration route
        fetch("/login", {
            method: "POST",
            body: JSON.stringify({ input }), //stringify object with form input
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success === true) {
                    //function that gets friends state in redux
                    location.replace("/");
                } else {
                    setError("pls try again");
                }
            });
    };

    return (
        <div className="register">
            <h1>log in</h1>
            <p>{error}</p>

            <div className="form-block">
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

                <button onClick={() => handleSubmit()}>Log in</button>
                <p>
                    forgot password? &nbsp;
                    <Link to="/reset">reset</Link>
                </p>
            </div>
        </div>
    );
}

// // export default class Login extends Component {
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         error: false,
//     //     };

//     //     //bind methods
//     //     this.handleInputChange = this.handleInputChange.bind(this);
//     //     this.handleSubmit = this.handleSubmit.bind(this);
//     // }

//     // m e t h o d s
// //     handleInputChange(e) {
// //         const text = e.currentTarget.value;
// //         this.setState({
// //             [e.currentTarget.name]: text, //grab input element and add with propertyname to state object
// //         });
// //     }

// // handleSubmit() {
// //     //console.log(this.state);
// //     //fetch POST request to the server's registration route
// //     fetch("/login", {
// //         method: "POST",
// //         body: JSON.stringify(this.state), //stringify object with form input
// //         headers: { "Content-Type": "application/json" },
// //     })
// //         .then((res) => res.json())
// //         .then((response) => {
// //             console.log("response", response);
// //             if (response.success) {
// //                 //"success true"
// //                 location.replace("/");
// //             } else {
// //                 this.setState({ error: true });
// //                 //"success false"
// //                 //update state to make error appear, also for catch
// //             }
// //         });
// // }

//     // t e m p l a t e
//     render() {
//         return (
//             <div className="register">
//                 <h1>log in</h1>
//                 {this.state.error === true && <p>smth wrong</p>}

//                 <div className="form-block">
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         onChange={this.handleInputChange}
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         onChange={this.handleInputChange}
//                     />

//                     <button onClick={this.handleSubmit}>Log in</button>
//                     <p>
//                         forgot password? &nbsp;
//                         <Link to="/reset">reset</Link>
//                     </p>
//                 </div>
//             </div>
//         );
//     }
// }
