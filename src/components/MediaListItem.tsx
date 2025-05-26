import { View, Text, Image } from "react-native";
import { MediaListData } from "@/types/types";

type MediaListItemProps = {
	mediaItem: MediaListData;
};

const MediaListItem = ({ mediaItem }: MediaListItemProps) => {
	return (
		<View>
			<Image
				source={{ uri: mediaItem.image }}
				style={{ width: 110, aspectRatio: 3 / 4 , marginHorizontal:4, borderRadius:5}}
			/>
		</View>
	);
};

export default MediaListItem;
