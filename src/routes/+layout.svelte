<script lang="ts">
	import '$lib/globals.css';
	export const preprocess = true;
  export const prerender = true;
</script>

<main class="min-h-screen flex items-center justify-center bg-noway-dark">
	<div>
		<slot />
	</div>
</main>
