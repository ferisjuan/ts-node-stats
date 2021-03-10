import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('src/data/football.csv')
matchReader.load()

const summary = new Summary(new WinsAnalysis('Newcastle'), new ConsoleReport())

summary.buildAndReport(matchReader.matches)

Summary.winsAnalysisWithHtmlReport('Newcastle').buildAndReport(
	matchReader.matches
)
