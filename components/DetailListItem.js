import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../utility/colors'; // Corrected import statement

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon} // Corrected attribute name
              size={24}
              style={{ color: colors.black, marginRight: 20 }} // Corrected style attribute
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text> 
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string, // Corrected PropTypes string case
  subtitle: PropTypes.string,
};

const styles = StyleSheet.create({
  borderContainer: { paddingLeft: 24 },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth, // Corrected borderBottomWidth attribute
  },
  container: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  contentContainer: { justifyContent: 'center', flex: 1 },
  title: {
    color: colors.black,
    fontWeight: 'bold', // Corrected fontWeight attribute
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});

export default DetailListItem;