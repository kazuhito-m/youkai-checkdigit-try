type Gtag = typeof gtag;

declare module 'vue/types/vue' {
  interface Vue {
    $gtag: Gtag
  }
}