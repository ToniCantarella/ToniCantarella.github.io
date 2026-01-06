import { useEffect, useState } from "react"
import SearchIcon from "../../../../../assets/svg/search.svg?react"
import "./SearchAndFilter.scss"
import { useTranslation } from "react-i18next"
import NameAscIcon from "../../../../../assets/svg/namesortasc.svg?react"
import NameDescIcon from "../../../../../assets/svg/namesordesc.svg?react"
import AmountAscIcon from "../../../../../assets/svg/numbersortasc.svg?react"
import AmountDescIcon from "../../../../../assets/svg/numbersortdesc.svg?react"
import CrossIcon from "../../../../../assets/svg/close.svg?react"

const FoodItems = [
    "apple",
    "orange",
    "grape",
    "pear",
    "banana",
    "sushi",
    "fish",
    "bread"
]

type SearchItem = {
    amount: number,
    name: string
}

const SearchItems: SearchItem[] = FoodItems.map(food => (
    {
        amount: Math.floor(Math.random() * (10 - 1) + 1),
        name: food
    }
))

enum Sort {
    ASC,
    DESC
}

export const SearchAndSort = () => {
    const { t } = useTranslation()
    const localizedItems = SearchItems.map(item => ({ ...item, name: t(`examples.${item.name}`) }))
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [searchResults, setSearchResults] = useState<SearchItem[]>(localizedItems)
    const [amountSort, setAmountSort] = useState<Sort>(Sort.ASC)
    const [nameSort, setNameSort] = useState<Sort>(Sort.ASC)

    useEffect(() => {
        if (searchQuery.length > 2) {
            const timeout = setTimeout(() => {
                const results = localizedItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                setSearchResults(results);
            }, 300)

            return () => clearTimeout(timeout);
        } else {
            setSearchResults(localizedItems)
        }
    }, [searchQuery])

    const onAmountSortChange = () => {
        const newFilter = amountSort === Sort.ASC ? Sort.DESC : Sort.ASC
        setAmountSort(newFilter)
        const results = searchResults.sort((a, b) => newFilter === Sort.ASC ? a.amount - b.amount : b.amount - a.amount)
        setSearchResults(results)
    }

    const onNameSortChange = () => {
        const newFilter = nameSort === Sort.ASC ? Sort.DESC : Sort.ASC
        setNameSort(newFilter)
        const results = searchResults.sort((a, b) => newFilter === Sort.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        setSearchResults(results)
    }

    const onClearAll = () => {
        setSearchQuery("")
        setAmountSort(Sort.ASC)
        setNameSort(Sort.ASC)
        setSearchResults(localizedItems)
    }

    return (
        <div className="search-and-filter">
            <div className="search-controls">
                <div className="search">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                        placeholder={t("examples.searchbar-placeholder")}
                    />
                    <button
                        className="search-button"
                    >
                        <SearchIcon />
                    </button>
                </div>

                <div className="sorting">
                    <button
                        onClick={() => onAmountSortChange()}
                        className={`${amountSort === Sort.DESC ? "selected" : ""}`}
                    >
                        {amountSort === Sort.ASC
                            ? <AmountAscIcon />
                            : <AmountDescIcon />
                        }
                    </button>
                    <button
                        onClick={() => onNameSortChange()}
                        className={`${nameSort === Sort.DESC ? "selected" : ""}`}
                    >
                        {nameSort === Sort.ASC
                            ? <NameAscIcon />
                            : <NameDescIcon />
                        }
                    </button>
                    <button
                        onClick={() => onClearAll()}
                        className="clear-all"
                    >
                        <CrossIcon />
                    </button>
                </div>
            </div>
            <div className="results">
                {searchResults.map((item, index) => (
                    <div
                        key={index}
                        className="result"
                    >
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}