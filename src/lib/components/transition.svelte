<script>
    import { page } from '$app/stores';
    import { fly } from 'svelte/transition';
  </script>
  
  {#key $page.url}
      <div class="absolute" in:fly={{ delay: 250 }} out:fly={{ duration:250 }}>
          URL: {$page.url}
      </div>
  {/key}
  
  <style>
  .absolute {
      position: absolute;
  }
  </style>