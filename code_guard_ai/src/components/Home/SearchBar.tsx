import { Input, InputGroup, Kbd, Text } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { LuSearch } from "react-icons/lu"
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value)
      }}>
      <InputGroup flex="1" startElement={<LuSearch />} endElement={
        <>
          <Kbd>Ctrl</Kbd>
          <Text marginBottom={1}>+</Text>
          <Kbd>F</Kbd>
        </>
      }>
        <Input ref={ref} placeholder="Search Code Reviews" borderRadius={20} fontFamily="cursive" variant="subtle" height={10} />
      </InputGroup >
    </form >
  )
}

export default SearchBar;