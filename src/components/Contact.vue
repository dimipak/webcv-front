<template>
<div class="contact-container">
  <h2>Contact</h2>
  <form class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="email" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="email" class="form-control" id="subject" aria-describedby="emailHelp" placeholder="Enter subject">
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea class="form-control" name="message" id="message" rows="3"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Send</button>
  </form>
</div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style lang="scss" scoped>

@import "../assets/sass/variables";

.contact-container {
  padding: 20px;
  width: 60%;
  margin: 50px auto;
  background-color: white;
}

.contact-form {
  width: 50%;
  margin:0 auto;

  button {
    background-color: #2c3e50;
    border-color: #2c3e50;

    &:hover {
      background-color: $greenColor;
      border-color: $greenColor;
    }
  }

  div {
    text-align: left;
    margin-bottom: 20px;

    label {
      margin-bottom: 0;
    }
  }
}

</style>