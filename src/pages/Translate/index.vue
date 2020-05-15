  <template>
  <div id="translate">
    <h1>Translator</h1>
    <label>English</label>
    <textarea v-model="translation"></textarea>
    <label>中文</label>
    <textarea v-model="result"></textarea>
    <button @click="translate">translate</button>
  </div>
</template>

<script>
import {translateText} from './../../services/api'
export default {
  name: 'translate',
  components: {
    translateText
  },
  data () {
    return {
      translation: 'translated text',
      result: '',
      source: 'en',
      target: 'zh-TW'
    }
  },
  methods: {
    translate: async function () {
      await translateText({
        q: this.translation,
        source: this.source,
        target: this.target
      }).then(
        response => {
          console.log(response.translations)
          this.result = response.translations[0].translatedText
        }
      )
    }
  }
}
</script>
<style scoped>
textarea {
  height: 150px;
  width: 300px;
}
</style>
