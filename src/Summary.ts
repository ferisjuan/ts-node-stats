import { MatchData } from './MatchData'

export interface Analyzer {
	run(matches: MatchData[]): string
}

export interface OutputTarget {
	print(report: string): void
}

export class Summary {
	constructor(public analizer: Analyzer, public outputTarget: OutputTarget) {}

	builldAndReport(matches: MatchData[]): void {
		const output = this.analizer.run(matches)
		this.outputTarget.print(output)
	}
}
