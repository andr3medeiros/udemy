import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, onTermSubmit, errorMessage] = useBusinesses();

    const filterByPrice = price => {
        return results.filter(item => item.price === price);
    }

    return <>
        <SearchBar
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => onTermSubmit(term)}
        />
        
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        
        <ScrollView>
            <ResultsList results={filterByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({});

export default SearchScreen;