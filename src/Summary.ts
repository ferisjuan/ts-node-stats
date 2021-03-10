import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchData } from './MatchData'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
	run(matches: MatchData[]): string
}

export interface OutputTarget {
	print(report: string): void
}

export class Summary {
	static winsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport())
	}

	constructor(public analizer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndReport(matches: MatchData[]): void {
		const output = this.analizer.run(matches)
		this.outputTarget.print(output)
	}
}
