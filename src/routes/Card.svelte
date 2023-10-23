<script lang="ts">
	export let icon: string = 'clown';

	export let text = 'Noway';
	export let link = 'https://google.com';
	export let position = 'left';
	$: imageName = `${icon}.png`;
</script>

<div class="min-w-[240px] sm:min-w-[400px] md:min-w-[600px]">
	<!-- <div class="bg-noway-light min-h-16 rounded-2xl"> -->
	<!-- 	<div class="absolute"><img class="w-20" src="icon-clown.png" /></div> -->
	<!-- 	<div class="flex flex-column justify-center items-center"> -->
	<!-- 		<div -->
	<!-- 			class="flex flex-row items-center justify-center align-middle h-full mt-4" -->
	<!-- 			style="font-family: Calgary;" -->
	<!-- 		> -->
	<!-- 			<span class="text-4xl text-noway-dark uppercase">Cast</span> -->
	<!-- 		</div> -->
	<!-- 	</div> -->

	<!-- 	<div class="absolute"><img class="w-20" src="icon-clown.png" /></div> -->
	<!-- </div> -->
	<a href={link} target="_blank">
		<div class="relative rounded-xl overflow-auto p-8">
			<div
				class="overflow-visible relative max-h-16 w-full mx-auto shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-noway-light"
			>
				
        {#if position == 'left'}
					<img class="absolute -left-6 sm:w-24 sm:h-24 w-16 h-16 rounded-full shadow-lg" src={imageName} />
					{/if}
				<div class="flex flex-col py-5 flex flex-row w-full justify-center items-center"
          style=""
        >
					<strong
						class="text-2xl sm:text-4xl font-calgary text-noway-dark mt-2"
						style="font-family: Calgary;">{text}</strong
					>
				</div>

				{#if position == 'right'}
					<img class="absolute -right-6 sm:w-24 sm:h-24 w-16 h-16 rounded-full shadow-lg" src={imageName} />
				{/if}
			</div>
		</div>
		<!-- <div class="relative rounded-xl overflow-auto p-8"> -->
		<!-- 	<div -->
		<!-- 		class="overflow-visible relative max-h-16 w-full mx-auto  shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-noway-light" -->
		<!-- 	> -->
		<!-- 		<div class="flex flex-col py-5 flex flex-row w-full justify-center items-center"> -->
		<!-- 			<strong class="text-4xl font-calgary text-noway-dark mt-2" -->
		<!--          style="font-family: Calgary;" -->
		<!-- 				>Andrew Alfred</strong -->
		<!-- 			> -->
		<!-- 		</div> -->

		<!-- 	</div> -->
		<!-- </div> -->
	</a>
</div>
