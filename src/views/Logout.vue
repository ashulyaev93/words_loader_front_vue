  <script>
  import {useRouter} from "vue-router";
  import axios from "axios";
  
  export default {
    name: "Logout",
    setup() {
      const router = useRouter();

      router.push('/login');
      
      const logout = async () => {
      await axios.post('logout', {}, {withCredentials: true});
      axios.defaults.headers.common['Authorization'] = '';
      await router.push('/login');
    }
    return {
      logout
    }
    }
  }
  </script>
  