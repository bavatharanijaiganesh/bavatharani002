import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";
import about from "../components/about";

Vue.use(VueRouter);    
	
	const routes=[
	{
		
		path:'/',
		name:'HelloWorld',
		component:HelloWorld
		
	},
	{
		
		path:'/about',
        name:'about',
        component:about   		
			
			}
			
	
	];
	
const router = new VueRouter({
	
        routes
});
export default router;