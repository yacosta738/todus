package com.todus.service.mapper;

import com.todus.domain.*;
import com.todus.service.dto.TweetsDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tweets} and its DTO {@link TweetsDTO}.
 */
@Mapper(componentModel = "spring", uses = { CustomerMapper.class })
public interface TweetsMapper extends EntityMapper<TweetsDTO, Tweets> {
    @Mapping(target = "customer", source = "customer", qualifiedByName = "id")
    TweetsDTO toDto(Tweets s);
}
