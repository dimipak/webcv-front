<template>
  <div class="timeline-container">
    <div class="container">
      <div class="timeline">
        <p><b>2019 - current</b></p>
        <p>Greece</p>
        <p>Athens</p>
      </div>
      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>RoadCube</h2>
          <p>Back end developer</p>
        </div>
        <p class="description">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English
          to
          emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool
          for
          mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or
          layout.
          Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and
          letters
          have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine,
          correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has
          no
          meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others
          are
          often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be
          found
          in the original.</p>
      </div>
    </div>

    <div class="container">
      <div class="timeline">
        <p><b>2017 - 2019</b></p>
        <p>Greece</p>
        <p>Athens</p>
      </div>
      <span class="dot"></span>
      <div class="details">
        <div class="work-header">
          <h2>Correct Creative Productions</h2>
          <p>Back end developer</p>
        </div>
        <p class="description">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English
          to
          emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool
          for
          mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or
          layout.
          Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and
          letters
          have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine,
          correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has
          no
          meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others
          are
          often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be
          found
          in the original.</p>
      </div>
    </div>

    <div class="container">
      <div class="timeline"><p>2020</p></div>
      <span class="dot"></span>
      <div class="details">
        <div>Title</div>
        <div>Description</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Timeline"
}
</script>

<style lang="scss" scoped>

.timeline-container {
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  background-color: white;
}

.container {
  display: flex;
}

.timeline {
  width: 20%;
  text-align: right;
  padding: 20px;
}

.dot {
  width: 15px;
  height: 14px;
  background-color: #2da1bf;
  border-radius: 50%;
  position: relative;
  top: 46px;
  left: 9.5px;
}

.details {
  width: 90%;
  text-align: left;
  padding: 6px 20px 100px;
  border-left: 5px solid #ccd5db;

  .description {
    color: gray;
  }

  .description:hover {
    color: inherit;
  }
}

.work-header {
  text-align: center;
}

</style>