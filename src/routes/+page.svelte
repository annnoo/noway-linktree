<script>
	import Card from "./Card.svelte";

import entries from "../data/entries.json" 

</script>
{#each entries as entry}
  <Card text={entry.text} icon={entry.icon} link={entry.link} position={entry.position}></Card>
{/each}
