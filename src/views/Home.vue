<template>
  <div class="container mt-5 text-center">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
import { ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
export default {
  name: "Home",
  setup() {
    const message = ref('Здесь что-то когда-то будет, а пока что просто зарегайся!');
    const router = useRouter();
    router.push('/login');
    
    const logout = async () => {
      await axios.post('logout', {}, {withCredentials: true});
      axios.defaults.headers.common['Authorization'] = '';
      await router.push('/login');
    }
    return {
      message,
      logout
    }
  }
}
</script>