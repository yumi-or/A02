// import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import ServiceArea from "../src/components/Service/ServiceArea";
import ServiceNewsSection from "../src/components/Service/ServiceNewsSection";
import ServiceSkillArea from "../src/components/Service/ServiceSkillArea";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import HomeHeader from "../src/layout/Header/HomeHeader";
import Kind from "./kind";
import Footer1 from "../src/layout/Footer/Footer1";
import React from "react";
var ReactDOM = require('react-dom');


const service = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <HomeHeader />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            {/*<ServiceBGC />*/}
            {/*/!*====== Breadcrumb section End ======*!/*/}
            {/*/!*====== Service Area Start ======*!/*/}
            {/*<ServiceArea />*/}
            {/*/!*====== Service Area End ======*!/*/}
            {/*/!*====== Skill area Start ======*!/*/}
            {/*<ServiceSkillArea />*/}
            {/*/!*====== Skill area End ======*!/*/}
            {/*/!*====== News Section start ======*!/*/}
            {/*<ServiceNewsSection />*/}
            {/*/!*====== News Section End ======*!/*/}
            {/*====== Footer Start ======*/}
            {/*<Footer1 />*/}
            {/*====== Footer End ======*/}
        </>
    );
};
//
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Your favorite flavor is: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     {/*选择您最喜欢的网站*/}
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }
//
// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('example')
// );

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    hello:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

<Footer1 />

export default service;
