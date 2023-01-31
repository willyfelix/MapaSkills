select 
	t.* 
from 
	tecnologia t
	inner join skill s on s.tecnologia_id = t.id
    inner join cargo c on c.id = s.cargo_id
where
	c.id = 2;
    
SELECT *
FROM skill s
WHERE s.cargo_id = 1 AND s.tecnologia_id = 2;