import { NumberInputField, NumberInputRoot } from "compositions/ui/number-input"

export const NumberInputBasic = () => {
  return (
    <NumberInputRoot defaultValue="10" width="200px">
      <NumberInputField />
    </NumberInputRoot>
  )
}
