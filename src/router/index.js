import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'

const routes = [{
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      isShow: false,
    },
    children: [{
        path: '/courseList',
        name: 'CourseList',
        component: () => import( /* webpackChunkName: "Login" */ '../views/courseList.vue'),
        meta: {
          isShow: true,
          title: '课程列表'
        }
      },
      {
        path: '/teacherList',
        name: 'TeacherList',
        component: () => import( /* webpackChunkName: "Login" */ '../views/teacherList.vue'),
        meta: {
          isShow: true,
          title: '讲师列表'
        }
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import( /* webpackChunkName: "Login" */ '../views/personal.vue'),
        meta: {
          isShow: true,
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    //component: () => import( /* webpackChunkName: "Login" */ '../views/Login.vue')
    meta: {
      isShow: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router