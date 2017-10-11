select *
from line_items
join products on line_items.product_id = products.id 
where order_id = $1