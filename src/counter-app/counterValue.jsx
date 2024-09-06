import useCounter from "../store/useCounterStore"

export const CounterValue = () => {
    const count = useCounter(state => state)

    console.log(count)

    return (
        <div className=" text-center font-medium">
            Counter Value is 100
        </div>
    )
}