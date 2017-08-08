<template>
  <div class="wrapper">
    <div class="title">
      <h1>SEJARAH</h1>
    </div>
    <div class="text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tempora quis laborum voluptas dolorem voluptatibus perferendis autem quaerat expedita tenetur, in possimus maxime ducimus cumque quod harum, id omnis ratione.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, dolorem beatae doloremque aspernatur, soluta atque voluptatem ut veritatis delectus iure cumque minima est eaque autem harum ducimus repellendus blanditiis a doloribus sit. Quis consectetur aut necessitatibus saepe ullam, omnis animi?</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eligendi.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusamus numquam voluptatum animi nisi facilis labore, recusandae pariatur temporibus quisquam, voluptate id repellendus ab omnis explicabo ex similique, totam iste? Ducimus nobis reprehenderit, ullam illo possimus dolore. Fugit, culpa laboriosam, nam obcaecati cupiditate ipsum. Expedita, vero nihil sint placeat beatae, totam saepe odio minima cumque possimus doloribus. Quaerat, reiciendis, quis.</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 100%;
  width: 100%;
}
.title {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  h1 {
    font-size: 2rem;
  }
}
.text {
  overflow: scroll;
  padding: 2rem 3rem;
  flex: 1;
  font-size: 1.5rem;
  line-height: 2rem;
}

@media (min-width: 700px) {
  .wrapper {
    flex-direction: row;
  }
  .title{
    padding: 0;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
  }
  .text {
    font-size: 1rem;
      letter-spacing: 0.1rem;
  }
}
</style>

