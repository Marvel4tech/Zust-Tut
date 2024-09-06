import useCounter from "../store/useCounterStore"

export const CounterValue = () => {
    const stateValue = useCounter((state) => state.count)

    console.log(stateValue)

    return (
        <div className=" text-center font-medium">
            {stateValue}
        </div>
    )
}