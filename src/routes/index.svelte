<script>
import { browser } from '$app/env';
import { goto } from '$app/navigation';
$: if (browser) {
  goto(`/home`);
}
</script>

<svelte:head>
<meta name="description" content="Check out my website!">
<title>Art of Dragons - Home</title>
<meta property="og:image" content="/round.png">
<link rel="icon" href="/round.png" type="image/x-icon">
</svelte:head>