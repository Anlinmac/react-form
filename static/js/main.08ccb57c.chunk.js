(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=(a(11),a(2)),s=a.n(c),m=a(3),r=a(4),i=a(7),o=a(5),u=a(8),h=a(6),d=a.n(h),f=(a(15),a(16),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleFirstnameChange=function(e){a.setState({firstName:e.target.value})},a.handleLastnameChange=function(e){a.setState({lastName:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleCityChange=function(e){a.setState({city:e.target.value})},a.handleStateChange=function(e){a.setState({state:e})},a.handleZipcodeChange=function(e){a.setState({zipCode:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),alert("Thank you "+"".concat(a.state.firstName)+" for submitting"),console.log("First name "+"".concat(a.state.firstName)+"\nLast name "+" ".concat(a.state.lastName)+"\nEmail "+"".concat(a.state.email)+"\nCity "+"".concat(a.state.city)+"\nState"+" ".concat(a.state.state)+"\nZipcode "+"".concat(a.state.zipCode)),a.setState({firstName:"",lastName:"",email:"",state:"",city:"",zipCode:""})},a.state={firstName:"",lastName:"",email:"",city:"",state:"",zipCode:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container w-50 box"},l.a.createElement("h2",{className:"py-4 text-center font"},"Contact us ",l.a.createElement("i",{class:"fa fa-paper-plane"})),l.a.createElement("form",{className:"mb-4"},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",null,"First name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.firstName,onChange:this.handleFirstnameChange})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",null,"Last name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.lastName,onChange:this.handleLastnameChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.handleEmailChange})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-5"},l.a.createElement("label",null,"City"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.city,onChange:this.handleCityChange})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",null," State "),l.a.createElement(d.a,{id:"myId",className:"custom-select",value:this.state.usState,onChange:this.handleStateChange})),l.a.createElement("div",{className:"form-group col-md-3 "},l.a.createElement("label",null,"Zipcode"),l.a.createElement("input",{type:"number",className:"form-control",value:this.state.zipCode,onChange:this.handleZipcodeChange}))),l.a.createElement("div",{className:"pb-4"},l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Submit"))))}}]),t}(n.Component));var p=function(){return l.a.createElement("div",null,l.a.createElement(f,null))};s.a.render(l.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.08ccb57c.chunk.js.map