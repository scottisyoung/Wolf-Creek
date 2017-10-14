DELETE FROM line_items
WHERE product_id = $1 AND order_id = $2;
