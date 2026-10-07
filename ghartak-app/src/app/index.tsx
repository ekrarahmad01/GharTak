import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

const categories = [
  { name: "सब्ज़ी", icon: "🥦" },
  { name: "फल", icon: "🍎" },
  { name: "दूध", icon: "🥛" },
  { name: "किराना", icon: "🛒" },
  { name: "खाना", icon: "🍱" },
];

const products = [
  { id: 1, name: "आलू", price: 30, unit: "kg", icon: "🥔" },
  { id: 2, name: "टमाटर", price: 40, unit: "kg", icon: "🍅" },
  { id: 3, name: "प्याज़", price: 35, unit: "kg", icon: "🧅" },
  { id: 4, name: "दूध", price: 60, unit: "litre", icon: "🥛" },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("सब");

  const addToCart = () => {
    setCart(cart + 1);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>GharTak</Text>
            <Text style={styles.tagline}>हर चीज़, आपके घर तक 🏠</Text>
          </View>

          <TouchableOpacity style={styles.cart}>
            <Text style={styles.cartText}>🛒 {cart}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.locationBox}>
          <Text style={styles.locationIcon}>📍</Text>
          <View>
            <Text style={styles.smallText}>डिलीवरी लोकेशन</Text>
            <Text style={styles.location}>अपना पता चुनें ›</Text>
          </View>
        </View>

        <TextInput
          style={styles.search}
          placeholder="सब्ज़ी, किराना, खाना खोजें..."
          value={search}
          onChangeText={setSearch}
        />

        <Text style={styles.title}>कैटेगरी</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === "सब" && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory("सब")}
          >
            <Text style={styles.categoryIcon}>🏠</Text>
            <Text style={styles.categoryText}>सब</Text>
          </TouchableOpacity>

          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.category,
                selectedCategory === category.name &&
                  styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>GharTak पर स्वागत है! 🎉</Text>
          <Text style={styles.bannerText}>
            आपके आसपास की दुकान से सामान सीधे आपके घर तक।
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>अभी ऑर्डर करें</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.title}>आज की चीज़ें</Text>
          <Text style={styles.seeAll}>सब देखें ›</Text>
        </View>

        <View style={styles.products}>
          {filteredProducts.map((product) => (
            <View style={styles.productCard} key={product.id}>
              <View style={styles.productImage}>
                <Text style={styles.productIcon}>{product.icon}</Text>
              </View>

              <Text style={styles.productName}>{product.name}</Text>

              <Text style={styles.productUnit}>
                ₹{product.price}/{product.unit}
              </Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={addToCart}
              >
                <Text style={styles.addButtonText}>+ जोड़ें</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>🚚 GharTak Delivery</Text>
          <Text style={styles.infoText}>
            नज़दीकी दुकान से सामान • आसान ऑर्डर • COD और UPI भुगतान
          </Text>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f7f8fa",
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 14,
  },

  logo: {
    fontSize: 30,
    fontWeight: "800",
    color: "#16833b",
  },

  tagline: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  cart: {
    backgroundColor: "#e8f7ed",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },

  cartText: {
    fontSize: 16,
    fontWeight: "700",
  },

  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },

  locationIcon: {
    fontSize: 24,
    marginRight: 10,
  },

  smallText: {
    fontSize: 11,
    color: "#888",
  },

  location: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },

  search: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
    marginTop: 20,
    marginBottom: 12,
  },

  categoryScroll: {
    marginBottom: 4,
  },

  category: {
    width: 76,
    height: 82,
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },

  selectedCategory: {
    borderColor: "#16833b",
    backgroundColor: "#eaf7ee",
  },

  categoryIcon: {
    fontSize: 27,
    marginBottom: 5,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
  },

  banner: {
    backgroundColor: "#16833b",
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "800",
  },

  bannerText: {
    color: "#e9fff0",
    fontSize: 13,
    marginTop: 7,
    lineHeight: 19,
  },

  bannerButton: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
    marginTop: 14,
  },

  bannerButtonText: {
    color: "#16833b",
    fontWeight: "800",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  seeAll: {
    color: "#16833b",
    fontWeight: "700",
    marginTop: 20,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },

  productImage: {
    height: 105,
    backgroundColor: "#f5f6f7",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  productIcon: {
    fontSize: 52,
  },

  productName: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 10,
  },

  productUnit: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },

  addButton: {
    backgroundColor: "#16833b",
    borderRadius: 9,
    paddingVertical: 9,
    alignItems: "center",
    marginTop: 10,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  infoBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: "800",
  },

  infoText: {
    color: "#666",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 19,
  },

  bottomSpace: {
    height: 40,
  },
});