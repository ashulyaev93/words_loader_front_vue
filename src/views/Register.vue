<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <div class="form-floating">
        <input class="form-control" name="username" placeholder="username">
        <label>Username</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" name="password" placeholder="password">
        <label>Password</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" name="matchingPassword" placeholder="matchingPassword">
        <label>Confirm</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "Register",
  setup() {
    const router = useRouter();

    const submit = async e => {
      const form = new FormData(e.target);

      const inputs = Object.fromEntries(form.entries());

      await axios.post('register', inputs);

      await router.push('/login');
    }

    return {
      submit
    }
  }
}
</script>
