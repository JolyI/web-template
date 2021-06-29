import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  next()
  // start progress bar
  NProgress.start()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
