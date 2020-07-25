import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listOrders, deleteOrder } from "../actions/orderActions";
import { Link } from "react-router-dom";

function OrdersScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = orderDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Manage Orders</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Customer Name</th>
              <th>Payment Status</th>
              <th>Paid On</th>
              <th>Delivery Status</th>
              <th>Delivered On</th>
            </tr>
          </thead>
          <tbody className="orders-table">
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice}</td>
                <td>{order.user.name}</td>
                <td>{order.isPaid.toString()}</td>
                <td>{order.paidAt}</td>
                <td>{order.isDelivered.toString()}</td>
                <td>{order.deliveredAt}</td>
                <td className>
                  <Link to={"/order/" + order._id} className="button secondary">
                    Details
                  </Link>{" "}
                  <button
                    type="button"
                    onClick={() => deleteHandler(order)}
                    className="button secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersScreen;
