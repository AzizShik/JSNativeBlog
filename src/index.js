// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn2RZb56wnpxxSaaxvCUvir5HARVRL21M",
  authDomain: "jsnativeblog.firebaseapp.com",
  databaseURL: "https://jsnativeblog-default-rtdb.firebaseio.com",
  projectId: "jsnativeblog",
  storageBucket: "jsnativeblog.appspot.com",
  messagingSenderId: "527763372635",
  appId: "1:527763372635:web:e2aba340f2a0657baa1d7e",
  measurementId: "G-4T6ZG74768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import "./styles.css";
import {
  HeaderComponent
} from "./components/header.component";
import {
  NavigationComponent
} from "./components/navigation.component";
import {
  FavoriteComponent
} from './components/favorite.component';
import {
  CreateComponent
} from './components/create.component';
import {
  PostsComponent
} from './components/posts.component';
import {
  LoaderComponent
} from './components/loader.component';


new HeaderComponent('header');

const loader = new LoaderComponent('loader');
const navigation = new NavigationComponent('navigation');
const posts = new PostsComponent('posts', {
  loader
});
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite', {
  loader
});

navigation.registerTabs([{
    name: 'create',
    component: create
  },
  {
    name: 'posts',
    component: posts
  },
  {
    name: 'favorite',
    component: favorite
  },
]);