/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react/no-unused-prop-types
import React, { useEffect } from "react";
import useGenericState from "../../Library/useGenericState";
import { OptionProps, SelectBoxProps } from "./SelectBox.interface";
import { Input, Droplist, Container, Options, DropArrow } from "./style";

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const { placeholder, value, options, onChange, disabled } = props;
  const [state, setState] = useGenericState({
    showDropdownList: false,
    currentValue: value || "",
    dropdownList: options,
  });

  useEffect(() => {
    setState({ dropdownList: options });
  }, [options, value]);

  const { showDropdownList, currentValue, dropdownList } = state;

  const handleInputChange = (selected: string) => {
    setState(
      { currentValue: selected, showDropdownList: false },
      (newState) => {
        onChange(newState.currentValue);
      }
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): boolean => {
    if (e.target.value === "") {
      setState({ currentValue: e.target.value, dropdownList: options });
      return true;
    }
    let datalist = options;
    datalist = datalist.filter((item) =>
      item.slug
        .toLocaleLowerCase()
        .startsWith(e.target.value.toLocaleLowerCase())
    );
    setState({ currentValue: e.target.value, dropdownList: datalist });
    return true;
  };

  return (
    <Container className="selectBox">
      <Input
        placeholder={placeholder}
        value={currentValue}
        onChange={handleSearch}
        onClick={() => setState({ showDropdownList: !state.showDropdownList })}
        disabled={disabled}
        autoFocus
      />
      {showDropdownList && (
        <Droplist>
          {dropdownList.map((option: OptionProps) => (
            <Options
              key={option._id}
              data-value={option.slug}
              onClick={() => {
                handleInputChange(option.title ?? option.name);
              }}
            >
              {option.title ?? option.name}
            </Options>
          ))}
        </Droplist>
      )}
      <DropArrow
        onClick={() => setState({ showDropdownList: !state.showDropdownList })}
      />
    </Container>
  );
};

export default SelectBox;
