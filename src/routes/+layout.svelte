<script lang="ts">
	import '$lib/globals.css';
	export const preprocess = true;
	export const prerender = true;
</script>

<main class="min-h-screen flex items-center justify-center bg-noway-dark">
	<div class="absolute opacity-60 w-full h-full z-0">
		<svg width="100%" height="100%">
			<defs>
				<pattern id="polka-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						fill="#00000040"
						d="
  M 11.19 0.00
  L 14.14 0.00
  Q 17.44 1.11 17.88 4.07
  A 1.00 0.98 -28.4 0 1 17.62 4.91
  L 15.24 7.46
  A 0.40 0.39 -76.8 0 0 15.64 8.11
  Q 18.01 7.38 19.73 5.76
  C 21.42 4.17 23.11 2.89 25.00 4.81
  L 25.00 8.59
  C 23.56 12.37 19.96 16.24 15.51 14.39
  Q 14.95 14.16 14.92 14.76
  Q 14.76 17.64 15.96 20.27
  A 1.23 1.20 45.7 0 1 15.96 21.26
  C 14.60 24.31 10.79 24.10 9.08 21.37
  A 0.97 0.94 -50.3 0 1 9.01 20.48
  Q 10.15 17.74 10.04 14.77
  Q 10.02 14.22 9.50 14.41
  C 8.06 14.92 6.88 15.36 5.40 14.63
  Q 1.49 12.70 0.00 8.47
  L 0.00 4.59
  Q 2.81 2.90 5.29 5.64
  C 6.41 6.88 7.66 7.41 9.05 8.00
  A 0.52 0.51 79.7 0 0 9.62 7.17
  L 7.35 4.78
  A 1.00 0.99 29.9 0 1 7.10 3.87
  Q 7.80 0.85 11.19 0.00
  Z"
					/>
				</pattern>
			</defs>

			<rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
		</svg>
	</div>
	<div class="z-10">
		<div class="m-4 md:m-6">
			<a href="/">
				<h1 class="text-8xl flex flex-col gap-8 text-center text-noway-light">
					<div style="text-shadow: black 1px 1px 8px; font-family: Calgary;">NoWay4U</div>
				</h1>
			</a>
		</div>

		<slot />
	</div>
	<!-- PAttern overlay-->
</main>
<footer class="text-center bg-noway-dark text-noway-light">
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2 text-xs">
			<div class="flwx flex-row justify-center">
				<a href="https://www.ins.gg/impressum/"><span>Imprint</span></a>
				<a href="/privacy"><span>Privacy</span></a>
			</div>

			<div class="text-[12px]">
				Made with <span class="text-red-500">❤</span> by
				<a href="https://twitter.com/annnoo96"> Annnoo </a>
			</div>
		</div>
	</div>
</footer>
