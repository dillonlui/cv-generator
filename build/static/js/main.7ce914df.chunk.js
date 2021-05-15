(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(9),s=a.n(c),d=a(10),o=a(4),l=a(5),r=a(2),h=a(7),j=a(6),b=a(0);function u(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.data.name}),Object(b.jsx)("p",{children:t.data.location}),Object(b.jsx)("p",{children:t.data.email}),Object(b.jsx)("p",{children:t.data.phone}),Object(b.jsx)("p",{children:t.data.website})]})}var p=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={name:"",location:"",email:"",phone:"",website:"",isEdit:!0},t.handleChange=t.handleChange.bind(Object(r.a)(t)),t.handleClick=t.handleClick.bind(Object(r.a)(t)),t}return Object(l.a)(a,[{key:"handleChange",value:function(t){var e=t.target,a=e.id,n=e.value;this.setState(Object(d.a)({},a,n))}},{key:"handleClick",value:function(t){t.preventDefault(),this.setState((function(t){return{isEdit:!t.isEdit}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"General Information"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:this.state.isEdit?"":"hidden",children:Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",id:"name",placeholder:"Name",value:this.state.name,onChange:this.handleChange}),Object(b.jsx)("input",{type:"text",id:"location",placeholder:"Location",value:this.state.location,onChange:this.handleChange}),Object(b.jsx)("input",{type:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),Object(b.jsx)("input",{type:"tel",id:"phone",placeholder:"Phone Number",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",value:this.state.phone,onChange:this.handleChange}),Object(b.jsx)("input",{type:"text",id:"website",placeholder:"Website",value:this.state.website,onChange:this.handleChange}),Object(b.jsx)("button",{onClick:this.handleClick,children:"Save"})]})})}),Object(b.jsxs)("div",{className:this.state.isEdit?"hidden":"",children:[Object(b.jsx)(u,{data:this.state}),Object(b.jsx)("button",{onClick:this.handleClick,children:"Edit"})]})]})}}]),a}(i.a.Component),O=a(3);function x(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.data.school}),Object(b.jsx)("p",{children:t.data.city}),Object(b.jsx)("h3",{children:t.data.degree}),Object(b.jsxs)("p",{children:[t.data.schoolStart," to ",t.data.schoolEnd]})]})}var v=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={educationInputs:[{school:"",city:"",degree:"",schoolStart:"",schoolEnd:"",isEdit:!0}]},t.handleChange=t.handleChange.bind(Object(r.a)(t)),t.addEducation=t.addEducation.bind(Object(r.a)(t)),t.handleClick=t.handleClick.bind(Object(r.a)(t)),t}return Object(l.a)(a,[{key:"handleChange",value:function(t){var e=Object(O.a)(this.state.educationInputs);e[t.target.dataset.id][t.target.className]=t.target.value,this.setState({educationInputs:e})}},{key:"addEducation",value:function(t){this.setState((function(t){return{educationInputs:[].concat(Object(O.a)(t.educationInputs),[{school:"",city:"",degree:"",schoolStart:"",schoolEnd:"",isEdit:!0}])}}))}},{key:"handleClick",value:function(t){t.preventDefault();var e=Object(O.a)(this.state.educationInputs);e[t.target.id].isEdit=!this.state.educationInputs[t.target.id].isEdit,this.setState({educationInputs:e})}},{key:"render",value:function(){var t=this,e=this.state.educationInputs;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"Education"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:this.addEducation,children:"Add Education"}),e.map((function(a,n){var i="school-".concat(n),c="city-".concat(n),s="degree-".concat(n),d="schoolStart-".concat(n),o="schoolEndId-".concat(n);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onChange:t.handleChange,className:e[n].isEdit?"":"hidden",children:[Object(b.jsx)("input",{type:"text",id:i,"data-id":n,placeholder:"School",className:"school"}),Object(b.jsx)("input",{type:"text",id:c,"data-id":n,placeholder:"City",className:"city"}),Object(b.jsx)("input",{type:"text",id:s,"data-id":n,placeholder:"Degree",className:"degree"}),Object(b.jsx)("input",{type:"text",id:d,"data-id":n,placeholder:"From",className:"schoolStart"}),Object(b.jsx)("input",{type:"text",id:o,"data-id":n,placeholder:"To",className:"schoolEnd"}),Object(b.jsx)("button",{id:n,onClick:t.handleClick,children:"Save"})]})}),Object(b.jsxs)("div",{className:e[n].isEdit?"hidden":"",children:[Object(b.jsx)(x,{data:e[n]}),Object(b.jsx)("button",{id:n,onClick:t.handleClick,children:"Edit"})]})]},n)}))]})]})}}]),a}(i.a.Component);function m(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.data.company}),Object(b.jsx)("h3",{children:t.data.position}),Object(b.jsx)("p",{children:t.data.jobDescription}),Object(b.jsxs)("p",{children:[t.data.jobStart," to ",t.data.jobEnd]})]})}var C=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={workInputs:[{company:"",position:"",jobDescription:"",jobStart:"",jobEnd:"",isEdit:!0}]},t.handleChange=t.handleChange.bind(Object(r.a)(t)),t.addWork=t.addWork.bind(Object(r.a)(t)),t.handleClick=t.handleClick.bind(Object(r.a)(t)),t}return Object(l.a)(a,[{key:"handleChange",value:function(t){var e=Object(O.a)(this.state.workInputs);e[t.target.dataset.id][t.target.className]=t.target.value,this.setState({workInputs:e})}},{key:"addWork",value:function(t){this.setState((function(t){return{workInputs:[].concat(Object(O.a)(t.workInputs),[{company:"",position:"",jobDescription:"",jobStart:"",jobEnd:"",isEdit:!0}])}}))}},{key:"handleClick",value:function(t){t.preventDefault();var e=Object(O.a)(this.state.workInputs);e[t.target.id].isEdit=!this.state.workInputs[t.target.id].isEdit,this.setState({workInputs:e})}},{key:"render",value:function(){var t=this,e=this.state.workInputs;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"Work Experience"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:this.addWork,children:"Add Work"}),e.map((function(a,n){var i="company-".concat(n),c="position-".concat(n),s="jobDescription-".concat(n),d="jobStart-".concat(n),o="jobEndId-".concat(n);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onChange:t.handleChange,className:e[n].isEdit?"":"hidden",children:[Object(b.jsx)("input",{type:"text",id:i,"data-id":n,className:"company",placeholder:"Company Name"}),Object(b.jsx)("input",{type:"text",id:c,"data-id":n,className:"position",placeholder:"Position Title"}),Object(b.jsx)("textarea",{id:s,"data-id":n,className:"jobDescription",placeholder:"Job Description"}),Object(b.jsx)("input",{type:"text",id:d,"data-id":n,className:"jobStart",placeholder:"From"}),Object(b.jsx)("input",{type:"text",id:o,"data-id":n,className:"jobEnd",placeholder:"To"}),Object(b.jsx)("button",{id:n,onClick:t.handleClick,children:"Save"})]})}),Object(b.jsxs)("div",{className:e[n].isEdit?"hidden":"",children:[Object(b.jsx)(m,{data:e[n]}),Object(b.jsx)("button",{id:n,onClick:t.handleClick,children:"Edit"})]})]},n)}))]})]})}}]),a}(i.a.Component);function k(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"CV Generator"})}),Object(b.jsxs)("main",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(v,{}),Object(b.jsx)(C,{})]})]})}s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7ce914df.chunk.js.map