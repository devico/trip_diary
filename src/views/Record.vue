<template>
  <div class="row">
    <div class="col s8 offset-s2">
      <div class="page-title">
        <h3>Discover Berlin Walking Tour</h3>
      </div>
      <img class="materialboxed" width="500" src="https://cdn.getyourguide.com/img/tour_img-943740-145.jpg">
           
        
          <form class="form">
            <div class="input-field">
              <select>
                <option>name cat</option>
              </select>
              <label>Выберите категорию</label>
            </div>

            <p>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="income"
                />
                <span>Доход</span>
              </label>
            </p>

            <p>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="outcome"
                />
                <span>Расход</span>
              </label>
            </p>

            <div class="input-field">
              <input id="amount" type="number" />
              <label for="amount">Сумма</label>
              <span class="helper-text invalid">amount пароль</span>
            </div>

            <div class="input-field">
              <input id="description" type="text" />
              <label for="description">Описание</label>
              <span class="helper-text invalid">description пароль</span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Создать
              <i class="material-icons right">send</i>
            </button>
          </form>        
    </div>
  </div>
</template>

<style scoped>
.card-image {
  height: 300px;
  object-fit: cover;
}
</style>
