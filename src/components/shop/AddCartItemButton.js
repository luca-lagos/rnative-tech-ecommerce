import { StyleSheet, Text, View, Pressable } from "react-native";
import colorCollection from "../../utils/global/colors";
import { useState } from "react";
import React from "react";
import fonts from "../../utils/global/fonts";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/cart/cartSlice";
import Notification from "../notifications/Notification";

const AddCartItemButton = ({ initialValue, product }) => {
  const [productCount, setProductCount] = useState(initialValue);
  const [notification, setNotification] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState(null);
  const [navigate, setNavigate] = useState(null);
  const dispatch = useDispatch();
  const HandleAddCartItem = (quantity) => {
    const productToCart = {
      id: product.id,
      title: product.title,
      description: product.description,
      picture_url: product.thumbnail,
      category_id: product.category,
      currency_id: "$",
      unit_price: product.price,
    };
    console.log(product);
    console.log(productToCart);
    dispatch(addCartItem({ ...productToCart, quantity }));
    setSuccess(true);
    setError(false);
    setTitle("Product added successfully");
    setNavigate("Cart");
    setProductCount(1);
    setNotification(true);
  };
  return (
    <>
      <View style={styles.pricePanel}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.discount}>{product.discountPercentage}% OFF</Text>
        </View>
        <View style={styles.countContainer}>
          <Pressable
            style={
              productCount == 1
                ? styles.buttonCountDisabled
                : styles.buttonCount
            }
            disabled={productCount === 1 ? true : false}
            onPress={() => {
              setProductCount(productCount - 1);
            }}
            title="-"
          >
            <Text style={styles.countText}>-</Text>
          </Pressable>
          <View style={styles.count}>
            <Text style={styles.countText}>{productCount}</Text>
          </View>
          <Pressable
            style={
              productCount == product.stock
                ? styles.buttonCountDisabled
                : styles.buttonCount
            }
            disabled={productCount === product.stock ? true : false}
            onPress={() => {
              setProductCount(productCount + 1);
            }}
            title="+"
          >
            <Text style={styles.countText}>+</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.addToCartButton}
        onPress={() => HandleAddCartItem(productCount)}
      >
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </Pressable>
      <Notification
        modalVisible={notification}
        title={title}
        navigate={navigate}
        onSuccess={success}
        onError={error}
      />
    </>
  );
};

export default AddCartItemButton;

const styles = StyleSheet.create({
  countContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 15,
  },
  count: {
    width: 45,
    height: 55,
    backgroundColor: colorCollection.violet,
    display: "flex",
    borderRadius: 10,
  },
  buttonCount: {
    width: 45,
    height: 55,
    backgroundColor: colorCollection.darkviolet,
    display: "flex",
    borderRadius: 10,
  },
  buttonCountDisabled: {
    width: 45,
    height: 55,
    backgroundColor: colorCollection.disabled,
    display: "flex",
    borderRadius: 10,
  },
  countText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 12,
  },
  pricePanel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
  },
  price: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: fonts.Josefin,
    color: colorCollection.textdark,
  },
  discount: {
    fontSize: 17,
    fontFamily: fonts.Josefin,
    color: colorCollection.violet,
    marginTop: -7,
    textAlign: "left",
    marginLeft: 7,
  },
  addToCartButton: {
    width: "100%",
    backgroundColor: colorCollection.darkviolet,
    height: 60,
    borderRadius: 50,
  },
  addToCartText: {
    textAlign: "center",
    marginTop: 14,
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
    fontFamily: fonts.Josefin,
  },
});
