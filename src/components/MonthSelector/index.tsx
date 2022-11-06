import { Text, View, StyleSheet } from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import { eachMonthOfInterval, subMonths, addMonths, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import PagerView from 'react-native-pager-view'

interface Props {
    index?: number
    setIndex: Dispatch<SetStateAction<number>>
}

const dates = eachMonthOfInterval({
    start: subMonths(new Date(), 50),
    end: addMonths(new Date(), 50)
}).map(date => format(date, 'MMMM Y', { locale: ptBR }).replace(/^(\w{1})/g, s => s.toUpperCase()))


export const MonthSelector = ({ index, setIndex }: Props) => {

    return (

        <PagerView style={styles.viewPager} initialPage={50} onPageSelected={(e => setIndex(e.nativeEvent.position - 50))} >
            {dates.map((date, i) => (
                <View key={i} style={styles.page}>
                    <Text style={{ fontWeight: "700" }}>{'<'}  {date}  {'>'}</Text>
                </View>
            ))}
        </PagerView>

    )
}

const styles = StyleSheet.create({
    viewPager: {
        width: '100%', height: '10%',

        flexDirection: 'row',

    },
    page: {

        justifyContent: 'center',
        alignItems: 'center',
        width: '50%', height: '30%',

    },
});