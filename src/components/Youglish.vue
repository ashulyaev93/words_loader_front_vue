<script>
import NullMessage from '@/components/NullMessage'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      views: 0,
      curTrack: 0,
      totalTracks: 0,
      widget: null
    }
  },
  components: {
    NullMessage
  },
  computed: {
    ...mapState(['inputWord'])
  },
  watch: {
    inputWord() {
      this.onYouglishAPIReady(this.inputWord)
    }
  },
  created() {
    let tag = document.createElement('script')
    tag.src = 'https://youglish.com/public/emb/widget.js'
    let firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },
  methods: {
    onYouglishAPIReady(inputWord) {
      // var widget;
      this.widget = new YG.Widget('widget-1', {
        width: 500,
        height: 500,
        components: 9, //search box & caption
        events: {
          onFetchDone: this.onFetchDone,
          onVideoChange: this.onVideoChange,
          onCaptionConsumed: this.onCaptionConsumed
        }
      })
      // 4. process the query
      this.widget.fetch(inputWord, 'english', 'us')
    },
    // 5. The API will call this method when the search is done
    onFetchDone(event) {
      if (event.totalResult === 0) alert('No result found')
      else this.totalTracks = event.totalResult
    },
    // 6. The API will call this method when switching to a new video.
    onVideoChange(event) {
      this.curTrack = event.trackNumber
      this.views = 0
    },
    // 7. The API will call this method when a caption is consumed.
    onCaptionConsumed(event) {
      if (++this.views < 1) this.widget.replay()
      else if (this.curTrack < this.totalTracks) this.widget.next()
    }
  }
}
</script>

<template>
  <div id="widget-1" @click="onYouglishAPIReady"></div>
  <div class="text" v-if="!inputWord">
    <NullMessage />
  </div>
</template>

<style lang="scss" scoped>
#widget-1 {
  max-width: 500px;
  max-height: 500px;

  #content_scroll {
    background: rgba(#42b883, 0.2) !important;
  }

  .caption {
    background: rgba(#42b883, 0.2) !important;
  }
}

.null-message {
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 4rem auto;
  }
}
</style>
