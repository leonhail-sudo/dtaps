export default function ({ $echo, $cookies, $auth }) {
  // Echo is available here
  $auth.fetchUser()
  if ($auth) {
    console.log($echo)
    // laravel echo
    $echo.private('message-process.' + $auth.user.id)
      .listen('.message-process', (notif) => {
        $auth.fetchUser()
        console.log(notif)
      })
    $echo.private('campaign-process.' + $auth.user.id)
      .listen('.campaign-process', (notif) => {
        $auth.fetchUser()
        console.log(notif)
      })
  }
}
