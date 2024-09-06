import useCounter from "../store/useCounterStore"

export const CounterValue = () => {
    const stateValue = useCounter(state => state)

    console.log(stateValue)

    return (
        <div className=" text-center font-medium">
            Counter Value is 100
        </div>
    )
}